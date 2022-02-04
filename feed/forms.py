from django import forms
from .models import Post, Comments

class NewPostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['description', 'pic', 'tags']

class NewCommentForm(forms.ModelForm):
    class Meta:
        model = Comments
        fields = ['comment']