from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from datetime import datetime, timezone

# Create your views here.


def index(request):
    return HttpResponse('REST server returning a JSON like: {"currentDateTime":"2019-08-12T14:40Z"}')


def currentDateTime(request):
    date = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%MZ")
    return JsonResponse({"currentDateTime": date})

# Create your views here.
