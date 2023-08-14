import React from 'react';
import { TVDetails} from '@/lib/interfaces';





const TvDetailsTable = (details: TVDetails) => {


  return (
    <table className='w-full  table-auto'>

      <tbody>
       
          <tr>
            <td>Budget</td>
            <td>{details.name}</td>

          </tr>
          <tr >
            <td>Revenue</td>
            <td>{details.name}</td>

          </tr>
          <tr >
            <td>Website</td>
            <td>{details.homepage? <a className="ps-2 text-sm text-blue-200" href={details.homepage}>{details.homepage}</a>: <p className="ps-2 text-sm">N/A</p>}</td>

          </tr>

      </tbody>
    </table>
  );
};

export default TvDetailsTable;