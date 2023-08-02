import React from 'react';
import { MovieDetails } from '@/lib/interfaces';





const MovieDetailsTable = (details: MovieDetails) => {


  return (
    <table className='w-full  table-auto'>

      <tbody>
       
          <tr>
            <td>Budget</td>
            <td>{details.budget}</td>

          </tr>
          <tr >
            <td>Revenue</td>
            <td>{details.revenue}</td>

          </tr>
          <tr >
            <td>Website</td>
            <td>{details.homepage}</td>

          </tr>

      </tbody>
    </table>
  );
};

export default MovieDetailsTable;