from beanie import Document

class ProblemModel(Document):
    class Settings:
        numerone = "a"
        operation="operation"
        numertwo = "b"
        answer = "answer"