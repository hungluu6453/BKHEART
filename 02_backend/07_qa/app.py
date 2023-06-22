import uvicorn
import logging
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

import model
import constant


logging.basicConfig(level=logging.INFO)


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = model.Question_Aswering_model(constant.MODEL_PATH)


class Request_Item(BaseModel):
    question: str
    context: str


class Response_Item(BaseModel):
    start_position: int
    end_position: int
    text: str


@app.post("/bkheart/api/qa")
def qa(Request: Request_Item):
    question = Request.question
    context = Request.context

    start_position, end_position, answer, execution_time = model.predict(
        context, question
    )

    logging.info('Question: %s', question)
    logging.info('Answer: %s, Execution time: %s', answer, execution_time)
    logging.info('Context: %s', context)

    return Response_Item(
        start_position=start_position,
        end_position=end_position,
        text=answer,
    )


if __name__ == '__main__':
    uvicorn.run("app:app", host='0.0.0.0', port=8004)
