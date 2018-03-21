<?php

namespace App\Http\Controllers;

use App\Todo;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * En esta clase deben implementar los metodos vacios de acuerdo a lo
 * previamente estudiado acerca de RESTFul. Recuerda que DEBEN validar los datos
 * de entrada y de regresar lo que les pide el método correctamente.
 *
 * Class TodoController
 * @package App\Http\Controllers
 */
class TodoController extends Controller {

    /**
     * Este método del controlador regresa el listado del todos de la app
     * en un response del tipo json ordenados desde el más antiguo al más nuevo.
     *
     * @return JsonResponse
     */
    public function index() {
        return Todo::orderBy('created_at', 'ASC')->get();
        // TODO
    }

    /**
     * Este método del controlador debe crear un nuevo registro todo
     * y al final regresa el registro creado en un response del tipo
     * json.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request) {
        // TODO
        $request->validate([
            'text' => 'required'
        ]);

        $todo = Todo::create(['text' => $request->text,'done'=>false]);
        return $todo;
    }

    /**
     * Modifica el item todo con el $id correspondiente
     * y regresa el mismo item modificado.
     *
     * @param integer $id
     * @param Request $request
     * @return JsonResponse
     */
    public function update($id, Request $request) {
        // TODO
    
        $todo  = Todo::find($id);
        
        $todo->done = $request->done;
        $todo->save();
        
        return $todo;
        
    }

    /**
     * Elimina el registro y devuelve un response 200 en caso de exito o un 400
     * en caso de fallo pero igual en tipo json.
     *
     * @param integer $id
     * @return JsonResponse
     */
    public function destroy($id) {
        // TODO
        $todo  = Todo::find($id);
        
        try{
            $todo->delete();
            return response()->json("{}", 200);
        }catch (\Exception $e){
            return response()->json("{}", 400);
        }
    }

}
