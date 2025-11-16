from pydantic import BaseModel

a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 23, 4, 5, 6, 7, 8, 90, 1, 2, 2, 34, 54, 6, 67, 7, 8, 9, 90]
page_size = 3
page = 5

class ProblemModel(BaseModel):
    numerone: str
    operation: str
    numertwo: str
    answer: int

numera = page * page_size
print(numera)
print(a[numera - page_size:numera])

p = ProblemModel(
    numerone="16",
    operation="+",
    numertwo="17",
    answer=42
)
print(p.model_dump())