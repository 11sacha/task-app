from django.urls import path, include
from rest_framework import routers
from tasks_app import views
from rest_framework.documentation import include_docs_urls

#Api versioning
router = routers.DefaultRouter()
router.register(r'tasks', views.TaskView, 'tasks')

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path('docs/', include_docs_urls(title='Task_Api')),
]
