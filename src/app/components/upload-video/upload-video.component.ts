import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-upload-video',
  standalone: true,
  imports: [NgIf],
  templateUrl: './upload-video.component.html',
  styleUrl: './upload-video.component.css'
})
export class UploadVideoComponent {
  videoFile: File | null = null;
  suggestions: string | null = null;

  constructor(private http: HttpClient) {}

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.videoFile = input.files[0];
      this.uploadVideo(this.videoFile);
    }
  }

  uploadVideo(file: File) {
    const formData = new FormData();
    formData.append('video', file);
  
    this.http.post<{ suggestions: string }>('/api/video/process-video', formData)
      .subscribe({
        next: (response) => {
          this.suggestions = response.suggestions;
          // Exibir mensagem de sucesso ao usuário
          console.log('Vídeo enviado com sucesso!');
        },
        error: (error) => {
          console.error('Erro ao enviar o vídeo:', error);
          // Exibir mensagem de erro amigável ao usuário
          alert('Ocorreu um erro ao enviar o vídeo. Por favor, tente novamente mais tarde.');
        }
      });
  }
  

}
