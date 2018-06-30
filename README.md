# AngularTourOfHeroes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



# Summary Project Tour of Heros

https://angular.io/tutorial

##### 1. Introduction

by the end of this tutorial you will be able to do the following:

- Use built-in Angular directives to show and hide elements and display lists of hero data.
- Create Angular components to display hero details and show an array of heroes.
- Use one-way data binding for read-only data.
- Add editable fields to update a model with two-way data binding.
- Bind component methods to user events, like keystrokes and clicks.
- Enable users to select a hero from a master list and edit that hero in the details view.
- Format data with pipes.
- Create a shared service to assemble the heroes.
- Use routing to navigate among different views and their components.


##### 2. Application Shell

```
npm install -g @angular/cli
ng new angular-tour-of-heroes
cd angular-tour-of-heroes
ng serve --open
```
- You created the initial application structure using the Angular CLI.
- You learned that Angular components display data.
- You used the double curly braces of interpolation to display the app title.

##### 3. The Hero Editor

```
ng generate component heroes
```
- You used the CLI to create a second HeroesComponent.
- You displayed the HeroesComponent by adding it to the AppComponent shell.
- You applied the UppercasePipe to format the name.
- You used two-way data binding with the ngModel directive.
- You learned about the AppModule.
- You imported the FormsModule in the AppModule so that Angular would recognize and apply the ngModel directive.
- You learned the importance of declaring components in the AppModule and appreciated that the CLI declared it for you.

##### 4. Display a Heroes List

- The Tour of Heroes app displays a list of heroes in a Master/Detail view.
- The user can select a hero and see that hero's details.
- You used *ngFor to display a list.
- You used *ngIf to conditionally include or exclude a block of HTML.
- You can toggle a CSS style class with a class binding.

##### 5. Master/Detail Components

```
ng generate component hero-detail
```
- You created a separate, reusable HeroDetailComponent.
- You used a property binding to give the parent HeroesComponent control over the child HeroDetailComponent.
- You used the @Input decorator to make the hero property available for binding by the external HeroesComponent.

##### 6. Services 
```
ng generate service hero
ng generate service hero --module=app
ng generate component messages
ng generate service message
```

- You refactored data access to the HeroService class.
- You registered the HeroService as the provider of its service at the root level so that it can be injected anywhere in the app.
- You used Angular Dependency Injection to inject it into a component.
- You gave the HeroService get data method an asynchronous signature.
- You discovered Observable and the RxJS Observable library.
- You used RxJS of() to return an observable of mock heroes (Observable<Hero[]>).
- The component's ngOnInit lifecycle hook calls the HeroService method, not the constructor.
- You created a MessageService for loosely-coupled communication between classes.
- The HeroService injected into a component is created with another injected service, MessageService.

##### 7. Routing
```
ng generate module app-routing --flat --module=app
ng serve
ng generate component dashboard
```

- You added the Angular router to navigate among different components.
- You turned the AppComponent into a navigation shell with <a> links and a <router-outlet>.
- You configured the router in an AppRoutingModule
- You defined simple routes, a redirect route, and a parameterized route.
- You used the routerLink directive in anchor elements.
- You refactored a tightly-coupled master/detail view into a routed detail view.
- You used router link parameters to navigate to the detail view of a user-selected hero.
- You shared the HeroService among multiple components.

##### 8. HTTP
```
npm install angular-in-memory-web-api --save
ng generate component hero-search
```

- You added the necessary dependencies to use HTTP in the app.
- You refactored HeroService to load heroes from a web API.
- You extended HeroService to support post(), put(), and delete() methods.
- You updated the components to allow adding, editing, and deleting of heroes.
- You configured an in-memory web API.
- You learned how to use observables.

###### Next Starting Architecture Guide to learn more from Angular!!!

https://angular.io/guide/architecture

###### Testing!!!

https://angular.io/guide/testing

##### Links

https://angular.io/guide/cheatsheet
