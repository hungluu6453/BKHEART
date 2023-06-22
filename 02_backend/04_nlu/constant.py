INTENT_LIST = [
    'policy',
    'answer',
    'greeting',
    'confirm',
    'disagree',
    'chitchat',
    'thanks',
]

ENTITY_LIST = [
    'policy',
    'role',
]
LM_PATH = "vinai/phobert-base"
VNCORENLP_PATH = '00_models/00_vncorenlp'
VNCORENLP_MODEL_PATH = '00_models/00_vncorenlp/VnCoreNLP-1.2.jar'
INTENT_MODEL_PATH = '00_models/01_intent_classifier'
ENTITY_MODEL_PATH = '00_models/02_named_entity_recognizer'

INTENT_THRESHOLD = 0.5
ENTITY_THRESHOLD = 0.5