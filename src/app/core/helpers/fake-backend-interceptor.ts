import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

// array in local storage for registered users
// let users = JSON.parse(localStorage.getItem('users')) || [];

const productos: any = { pagesize: 20, page: 0, total_filtrado: 3, resultado: [
    { id: 1, nombre: "Aceite de girasol", codigo: "A300", unidad_valor: 1.5, unidad_medidaid: 3, marcaid: 1, categoriaid: 1, activo: 1,
    marca: "Arcor", unidad_medida: "lt", producto: "Aceite de girasol, 1.5lt (Arcor)", categoria: "Alimento" },
    { id: 2, nombre: "Aceite de girasol", codigo: "A300", unidad_valor: 1.5, unidad_medidaid: 3, marcaid: 1, categoriaid: 1, activo: 1,
    marca: "Arcor", unidad_medida: "lt", producto: "Aceite de girasol, 1.5lt (Arcor)", categoria: "Alimento" },
    { id: 3, nombre: "Aceite de girasol", codigo: "A300", unidad_valor: 1.5, unidad_medidaid: 3, marcaid: 1, categoriaid: 1, activo: 0,
    marca: "Arcor", unidad_medida: "lt", producto: "Aceite de girasol, 1.5lt (Arcor)", categoria: "Alimento" } ]};
const marca: any = { pagesize: 10, page: 0, total_filtrado: 3,
  resultado:[ { id: 1, nombre: "Ledesma" }, { id: 2, nombre: "9 de oro" }, { id: 3, nombre: "Knorr" } ]};
const categoria: any = { pagesize: 10, page: 0, total_filtrado: 3, resultado:[
  { id: 1, nombre: "alimento/s" },{ id: 2, nombre: "Bebida/s" },{ id: 3, nombre: "Otros" } ]};
const unidadMedida: any = {
  pagesize: 10, page: 0, total_filtrado: 3,
  resultado:[ { "id": 1, "nombre": "Kilogramo", "simbolo": "kg" }, { "id": 2, "nombre": "Gramo", "simbolo": "gr" },
  { "id": 3, "nombre": "Litro", "simbolo": "lt" }, { "id": 4, "nombre": "Mililitro", "simbolo": "ml" }, { "id": 5, "nombre": "Unidad", "simbolo": "un" },
  { "id": 6, "nombre": "Centimetros cúbicos", "simbolo": "cm3" } ]};
const proveedores: any = { pagesize: 10, page: 0, total_filtrado: 3,
    resultado:[ { "id": 1, "nombre": "Proovedor 1" }, { "id": 2, "nombre": "Proovedor 2" }, { "id": 3, "nombre": "Proovedor 3" } ]};

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        // wrap in delayed observable to simulate server api call
        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute() {
            switch (true) {
                /* case url.endsWith('/users/authenticate') && method === 'POST':
                    return authenticate(); */
                /* case url.endsWith('/users/register') && method === 'POST':
                    return register(); */
                    /* case url.match(/\/users\/\d+$/) && method === 'GET':
                    return getUserById();
                    case url.match(/\/users\/\d+$/) && method === 'PUT':
                      return updateUser();
                      case url.match(/\/users\/\d+$/) && method === 'DELETE':
                        return deleteUser(); */
                case url.endsWith('/apimock/productos') && method === 'GET':
                    return getProductos();
                case url.endsWith('/apimock/categorias') && method === 'GET':
                    return getCategorias();
                case url.endsWith('/apimock/marcas') && method === 'GET':
                    return getMarcas();
                case url.endsWith('/apimock/unidad-medidas') && method === 'GET':
                    return getUnidadMedida();
                case url.endsWith('/apimock/proveedors') && method === 'GET':
                    return getProveedors();

                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }

        // route functions

        /* function authenticate() {
            const { username, password } = body;
            const user = users.find(x => x.username === username && x.password === password);
            if (!user) return error('Username or password is incorrect');
            return ok({
                id: user.id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                token: 'fake-jwt-token'
            })
        }

        function register() {
            const user = body

            if (users.find(x => x.username === user.username)) {
                return error('Username "' + user.username + '" is already taken')
            }

            user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
            return ok();
        } */

        function getProductos() {
            //if (!isLoggedIn()) return unauthorized();
            return ok(productos);
        }
        function getCategorias() {
          //if (!isLoggedIn()) return unauthorized();
          return ok(categoria);
        }
        function getMarcas() {
          //if (!isLoggedIn()) return unauthorized();
          return ok(marca);
        }
        function getUnidadMedida() {
          //if (!isLoggedIn()) return unauthorized();
          return ok(unidadMedida);
        }
        function getProveedors() {
          //if (!isLoggedIn()) return unauthorized();
          return ok(proveedores);
        }

        /* function getUserById() {
            if (!isLoggedIn()) return unauthorized();

            const user = users.find(x => x.id === idFromUrl());
            return ok(user);
        }

        function updateUser() {
            if (!isLoggedIn()) return unauthorized();

            let params = body;
            let user = users.find(x => x.id === idFromUrl());

            // only update password if entered
            if (!params.password) {
                delete params.password;
            }

            // update and save user
            Object.assign(user, params);
            localStorage.setItem('users', JSON.stringify(users));

            return ok();
        }

        function deleteUser() {
            if (!isLoggedIn()) return unauthorized();

            users = users.filter(x => x.id !== idFromUrl());
            localStorage.setItem('users', JSON.stringify(users));
            return ok();
        } */

        // helper functions

        function ok(body?: any) {
            return of(new HttpResponse({ status: 200, body }))
        }

        function error(message: string) {
            return throwError({ error: { message } });
        }

        function unauthorized() {
            return throwError({ status: 401, error: { message: 'Unauthorised' } });
        }

        function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer fake-jwt-token';
        }

        function idFromUrl() {
            const urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1]);
        }
    }
}

export const fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
