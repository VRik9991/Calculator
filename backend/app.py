from fastapi import FastAPI
import asyncio
from backend.ProblemModel import ProblemModel
from backend.InitDB import init_db


async def lifespan(app: FastAPI):
    await init_db()
    yield


app = FastAPI(title="Calculator", version="1.0", lifespan=lifespan)


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.post("/problemsave")
async def problemsave(a: str, operation: str, b: str):
    print(a, b, operation)
    our_answer = eval(str(a) + operation + str(b))
    problem = ProblemModel(
        numerone=a,
        operation=operation,
        numertwo=b,
        answer=our_answer
    )
    await problem.save()
    return {"message": "OK", "text": str(our_answer)}


@app.get("/problemload")
async def problemload(page: int, pagesize: int):
    problems = await ProblemModel.find().to_list()
    needed_problems = [problem.model_dump() for problem in problems[page * pagesize - pagesize:page * pagesize]]
    return {
        "message": "OK",
        "problems": needed_problems,
        "total": len(problems)
    }