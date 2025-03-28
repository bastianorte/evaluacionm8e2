import { render, screen } from '@testing-library/react';
import ServiceList from './ServiceList';

describe('ServiceList', () => {
  const serviciosMock = [
    {
      id: 1,
      nombre: 'Servicio 1',
      texto: 'Descripción del servicio 1',
      icon: <svg data-testid="icon1">Icono 1</svg>,
    },
    {
      id: 2,
      nombre: 'Servicio 2',
      texto: 'Descripción del servicio 2',
      icon: <svg data-testid="icon2">Icono 2</svg>,
    },
  ];

  test('Se simulan bien los servicios', () => {
    render(<ServiceList servicios={serviciosMock} />);

    // Verificar que el título "Servicios" esté presente
    expect(screen.getByText(/Servicios/i)).toBeInTheDocument();

    // Verificar que se rendericen los servicios
    serviciosMock.forEach((servicio) => {
      expect(screen.getByText(servicio.nombre)).toBeInTheDocument();
      expect(screen.getByText(servicio.texto)).toBeInTheDocument();
      expect(screen.getByTestId(`icon${servicio.id}`)).toBeInTheDocument();
    });
  });


});
