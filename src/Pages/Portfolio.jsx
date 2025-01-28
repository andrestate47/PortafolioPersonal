import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/card'; 

function Portfolio() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 pt-20">
      {/* Proyecto 1 */}
      <Card>
        <CardHeader>
          <img src="/public/images/robot.jpeg" alt="Imagen Proyecto 1" className="w-full h-80 object-cover rounded-t-lg" />
          <CardTitle>Proyecto 1</CardTitle>
          <CardDescription>Descripción del Proyecto 1</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Detalles del proyecto 1 aquí.</p>
        </CardContent>
        <CardFooter>
          <p>Footer del proyecto 1</p>
        </CardFooter>
      </Card>

      {/* Proyecto 2 */}
      <Card>
        <CardHeader>
          <img src="/public/images/AntCapt.png" alt="Imagen Proyecto 2" className="w-full h-80 object-cover rounded-t-lg" />
          <CardTitle>Proyecto 2</CardTitle>
          <CardDescription>Descripción del Proyecto 2</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Detalles del proyecto 2 aquí.</p>
        </CardContent>
        <CardFooter>
          <p>Footer del proyecto 2</p>
        </CardFooter>
      </Card>

      {/* Proyecto 3 */}
      <Card>
        <CardHeader>
          <img src="/public/images/galaxyTravel.png" alt="Imagen Proyecto 3" className="w-full h-80 object-cover rounded-t-lg" />
          <CardTitle>Proyecto 3</CardTitle>
          <CardDescription>Descripción del Proyecto 3</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Detalles del proyecto 3 aquí.</p>
        </CardContent>
        <CardFooter>
          <p>Footer del proyecto 3</p>
        </CardFooter>
      </Card>

      {/* Proyecto 4 */}
      <Card>
        <CardHeader>
          <img src="https://via.placeholder.com/150" alt="Imagen Proyecto 4" className="w-full h-40 object-cover rounded-t-lg" />
          <CardTitle>Proyecto 4</CardTitle>
          <CardDescription>Descripción del Proyecto 4</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Detalles del proyecto 4 aquí.</p>
        </CardContent>
        <CardFooter>
          <p>Footer del proyecto 4</p>
        </CardFooter>
      </Card>

      {/* Proyecto 5 */}
      <Card>
        <CardHeader>
          <img src="https://via.placeholder.com/150" alt="Imagen Proyecto 5" className="w-full h-40 object-cover rounded-t-lg" />
          <CardTitle>Proyecto 5</CardTitle>
          <CardDescription>Descripción del Proyecto 5</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Detalles del proyecto 5 aquí.</p>
        </CardContent>
        <CardFooter>
          <p>Footer del proyecto 5</p>
        </CardFooter>
      </Card>

      {/* Proyecto 6 */}
      <Card>
        <CardHeader>
          <img src="https://via.placeholder.com/150" alt="Imagen Proyecto 6" className="w-full h-40 object-cover rounded-t-lg" />
          <CardTitle>Proyecto 6</CardTitle>
          <CardDescription>Descripción del Proyecto 6</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Detalles del proyecto 6 aquí.</p>
        </CardContent>
        <CardFooter>
          <p>Footer del proyecto 6</p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Portfolio;
