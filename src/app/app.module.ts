import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {SortPipe} from './pipes/app.sort';
import { FormComponent } from './form/form.component';
import { ModelDrivenFormComponent } from './model-driven-form/model-driven-form.component';

@NgModule({
    declarations: [
        SortPipe,
        AppComponent,
        FormComponent,
        ModelDrivenFormComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot([
            {
                path: 'simple-form',
                component : FormComponent
            },
            {
                path: 'model-driven-form',
                component : ModelDrivenFormComponent
            },
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
