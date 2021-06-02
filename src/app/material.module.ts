import {NgModule} from '@angular/core'
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list'
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

@NgModule({
    imports:[
        MatCardModule,
        MatToolbarModule,
        MatInputModule,
        MatButtonModule,
        MatGridListModule,
        MatDividerModule,
        MatListModule
    ],
    exports:[
        MatCardModule,
        MatToolbarModule,
        MatInputModule,
        MatButtonModule,
        MatGridListModule,
        MatDividerModule,
        MatListModule
    ]
})
export class MaterialModule{}