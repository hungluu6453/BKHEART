import os
import time
import tensorflow as tf
from transformers import (
    AutoTokenizer,
    AutoModelForQuestionAnswering,
    TFAutoModelForQuestionAnswering
)

CURRENT_DIR = os.getcwd()
CURRENT_FOLDER_NAME = CURRENT_DIR.split('/')[-1]

class Question_Aswering_model:
    def __init__(self, model_path=None) -> None:
        self.model_path = model_path
        self.tokenizer = AutoTokenizer.from_pretrained(
            "ancs21/xlm-roberta-large-vi-qa"
            )
        if model_path is None:
            self.model = TFAutoModelForQuestionAnswering.from_pretrained(
                "ancs21/xlm-roberta-large-vi-qa",
                from_pt=True
                )
        else:
            os.chdir("..")
            cur_dir = os.getcwd()
            model_dir = os.path.join(cur_dir, model_path)
            self.model = TFAutoModelForQuestionAnswering.from_pretrained(model_dir)
            os.chdir(CURRENT_FOLDER_NAME)
        self.embebder = None

    def predict(self, context, question):
        start = time.time()
        if self.model_path:
            inputs = self.tokenizer(
                question,
                context,
                truncation="only_second",
                return_offsets_mapping=False,
                padding="max_length",
                return_tensors='np'
                )
            outputs = self.model((inputs['input_ids'], inputs['attention_mask']))
        else:
            inputs = self.tokenizer([context], [question], return_tensors="np", truncation=True)
            outputs = self.model(inputs)

        start_position = int(tf.argmax(outputs.start_logits, axis=1))
        end_position = int(tf.argmax(outputs.end_logits, axis=1))

        answer = inputs["input_ids"][0, start_position: end_position + 1]
        answer = self.tokenizer.decode(answer)
        answer = answer.replace('<s>', '')
        answer = answer.replace('</s>', '')

        return start_position, end_position, answer, time.time()-start
