from fastapi import FastAPI
import asyncio
from InitDB import init_db
from ProblemModel import ProblemModel


async def lifespan(app: FastAPI):
    await init_db()



app = FastAPI(title="Calculator",version="1.0",lifespan=lifespan)


@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.post("/Problem")
async def problem(a,operation,b,answer):
    problem = ProblemModel(
        numerone=a,
        operation=operation,
        numertwo=b,
        answer=answer

    )
    problem.save()
