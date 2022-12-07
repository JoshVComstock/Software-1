<?php

namespace App\Http\Controllers;

use App\Models\Consulta;
use App\Models\ConsultaController;
use Illuminate\Http\Request;

class ConsultaControllerController extends Controller
{
    public function index()
    {
        return Consulta::all();
    }
    public function store(Request $request)
    {
        $tarea=new Consulta();
        $tarea->nombre=$request->nombre;
        $tarea->consulta=$request->consulta;
        $tarea->save();

        return $tarea;
    }

    public function update(Request $request, $id)
    {
        $tarea=Consulta::find($request->$id);
        $tarea->nombre=$request->nombre;
        $tarea->consulta=$request->consulta;
        $tarea->save();

        return $tarea;
    }
    public function destroy($id)
    {
        return Consulta::destroy($id);
    }
}
