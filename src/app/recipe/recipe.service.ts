import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from './Recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private readonly listUrl =
    'https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2025-10%20Recetas/recipe.json';

  private readonly detailBase =
    'https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2025-10%20Recetas';

  constructor(private http: HttpClient) {}

  // Consulta el listado de recetas
  listRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.listUrl);
  }

  // Consulta el detalle de una receta por id
  getRecipeDetail(id: number | string): Observable<Recipe> {
    const url = `${this.detailBase}/${id}/recipe.json`;
    return this.http.get<Recipe>(url);
  }
}
