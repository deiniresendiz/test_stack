from . import db


class Log(db.Model):
    __tablename__ = 'logs'

    id = db.Column(db.Integer, primary_key=True)
    request_url = db.Column(db.String(100), nullable=False)
    request_type = db.Column(db.String(20), nullable=False)
    response_status = db.Column(db.String(10), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=db.func.current_timestamp())

    @classmethod
    def create(cls, request_url, request_type, response_status):
        log = Log(
            request_url=request_url,
            request_type=request_type,
            response_status=response_status
        )
        db.session.add(log)
        db.session.commit()
        return log

    def __str__(self):
        return f"Log(id={self.id}, request_url={self.request_url}, request_type={self.request_type}, response_status={self.response_status}, created_at={self.created_at})"

    def serialize(self):
        return {
            'id': self.id,
            'request_url': self.request_url,
            'request_type': self.request_type,
            'response_status': self.response_status,
        }