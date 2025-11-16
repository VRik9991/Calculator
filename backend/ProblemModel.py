from beanie import Document


class ProblemModel(Document):
    numerone: str
    operation: str
    numertwo: str
    answer: int


