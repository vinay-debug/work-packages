import * as dotenv from "dotenv";
import * as path from 'path';

import { Loader } from '../../loader';
import { Runner } from '../../runner';

////////////////////////////////////////////////

export default async () => {
    try {
        console.log("Tearing down...");
    }
    catch (error) {
        console.log('Problem in tearing down the tests! -> ' + error.message);
    }
};
