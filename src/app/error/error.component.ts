import { Component, OnInit } from '@angular/core';
import { ErrorService } from './error.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  errorTitle: string;
  errorContent: string;

  constructor(
    private errorService: ErrorService,
    private router: Router,
  ) { }

  ngOnInit() {
    const errorCode = this.errorService.getErrorCode();
    if (errorCode === 404) {
      this.errorTitle = "404 Not Found";
      this.errorContent = "Trang bạn truy cập đã bị xóa hoặc không tồn tại";
    } else if (errorCode === 400) {
      this.errorTitle = "400 Bad Request";
      this.errorContent = "Đường dẫn truy cập không đúng, vui lòng thử lại";
    } else if (errorCode === 403) {
      this.errorTitle = "403 Forbidden";
      this.errorContent = "Bạn không có quyền truy cập trang này, vui lòng quay lại";
    } else {
      this.errorTitle = "Unknown";
      this.errorContent = "Lỗi không xác định";
    }
  }

  backPage() {
    this.router.navigate(["/"]);
  }
}
