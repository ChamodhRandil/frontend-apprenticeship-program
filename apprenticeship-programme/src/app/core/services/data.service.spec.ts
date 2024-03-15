import { ApiService } from './api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ExceptionService } from './exception.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { API_URL } from '../constants/api.constants';

describe('ApiService', () => {
  let apiService: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [ApiService, ExceptionService]
    });
    apiService = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return data from the API', () => {
    const mockData = { id: 1, name: 'Test Data' };

    apiService.getData().subscribe((data) => {
      expect(data).toEqual(mockData);
    });

    const request = httpMock.expectOne(API_URL);
    expect(request.request.method).toBe('GET');

    request.flush(mockData);
  });

  it('should handle errors from the API', () => {
    const errorMessage = 'An error occurred';
    const errorResponse = { status: 404, statusText: 'Not Found' };

    apiService.getData().subscribe(
      () => fail('Expected the call to fail with a 504 error'),
      (error) => {
        expect(error).toBeTruthy();
        expect(error.status).toBe(504);
        expect(error.statusText).toBe('Not Found');
      }
    );

    const request = httpMock.expectOne(API_URL);
    expect(request.request.method).toBe('GET');

    request.flush(errorMessage, { status: 404, statusText: 'Gateway Timeout' });
  });
});
