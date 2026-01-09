from abc import ABC, abstractmethod

class AbstractRepository(ABC):

    @abstractmethod
    def get_user(self, user_id):
        pass

    @abstractmethod
    def save_user(self, user):
        pass

    @abstractmethod
    def add_time_log(self, time_log):
        pass

    @abstractmethod
    def get_logs(self, user_id):
        pass
