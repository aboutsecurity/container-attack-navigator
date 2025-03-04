import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ViewModel } from '../classes';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // Import CUSTOM_ELEMENTS_SCHEMA
import { LayerSettingsComponent } from './layer-settings.component';
import { FormsModule } from '@angular/forms';
import { ConfigService } from '../services/config.service';
import * as MockData from '../../tests/utils/mock-data';

describe('LayerSettingsComponent', () => {
  let component: LayerSettingsComponent;
  let fixture: ComponentFixture<LayerSettingsComponent>;
  let configService: ConfigService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
		declarations: [LayerSettingsComponent],
    imports: [
				HttpClientModule,
        FormsModule,
				MarkdownModule.forRoot({ loader: HttpClient })
      ],
    providers: [MarkdownService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
    configService = TestBed.inject(ConfigService);
    configService.versions = MockData.configData;
    fixture = TestBed.createComponent(LayerSettingsComponent);
    component = fixture.componentInstance;
    component.viewModel = new ViewModel('layer', '35', 'enterprise-attack-13', null);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
