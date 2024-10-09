import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  constructor(private http: HttpClient) {}

  processVideo(video: File): Observable<{ suggestions: string }> {
    const formData = new FormData();
    formData.append('video', video);
    return this.http.post<{ suggestions: string }>('/api/video/process-video', formData);
  }
}
