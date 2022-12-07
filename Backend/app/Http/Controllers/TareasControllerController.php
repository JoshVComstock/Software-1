<?php

namespace App\Http\Controllers;
use App\Models\Tareas;
use App\Models\TareasController;
use Illuminate\Http\Request;

class TareasControllerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Tareas::all();
    }
    public function store(Request $request)
    {
        $tarea=new Tareas();
        $tarea->nombre=$request->nombre;
        $tarea->descripcion=$request->descripcion;
        $tarea->save();

        return $tarea;
    }

    public function update(Request $request, $id)
    {
        $tarea=Tareas::find($request->$id);
        $tarea->nombre=$request->nombre;
        $tarea->descripcion=$request->descripcion;
        $tarea->save();

        return $tarea;
    }
    public function destroy($id)
    {
        return Tareas::destroy($id);
    }
}
