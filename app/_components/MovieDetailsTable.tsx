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
            <td>{details.homepage? <a className="ps-2 text-sm text-blue-200" href={details.homepage}>{details.homepage}</a>: <p className="ps-2 text-sm">N/A</p>}</td>

          </tr>

      </tbody>
    </table>
  );
};

export default MovieDetailsTable;