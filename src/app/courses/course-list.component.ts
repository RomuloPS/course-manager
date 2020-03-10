import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

    courses: Course[] = [];

    ngOnInit(): void{
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '/assets/images/forms.png',
                prince: 99.99,
                code: 'XPS-7891',
                duration: 120,
                rating: 5.4,
                releaseDate: 'December, 4, 2019'
            },
            {
                id: 2,
                name: 'Angular: HTTP',
                imageUrl: '/assets/images/http.png',
                prince: 45.99,
                code: 'APS-5489',
                duration: 80,
                rating: 4,
                releaseDate: 'December, 8, 2019'
            }
        ]
    }

}