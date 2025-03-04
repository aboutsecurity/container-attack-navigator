import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatrixMiniComponent } from './matrix-mini.component';

describe('MatrixMiniComponent', () => {
    let component: MatrixMiniComponent;
    let fixture: ComponentFixture<MatrixMiniComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [MatrixMiniComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MatrixMiniComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
