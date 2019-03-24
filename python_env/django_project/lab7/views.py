from django.shortcuts import render

def lab7(request):
	name = request.POST.get('name', False)
	passw = request.POST.get('pwd', False)

	if name == "Jimmy" and passw == "Hendrix":
		context = {'result': 'Cool'}
	else:
		context = {'result': 'Bad User Name'}

	return render(request, 'lab7/lab7.html', context=context)

