import * as dotenv from "dotenv";
import * as path from 'path';

import { Loader } from './loader';
import { Runner } from './runner';

////////////////////////////////////////////////////////////////////////////////////

(async () => {
    try {
        const envPath = path.join(process.cwd(), '.env');
        dotenv.config({ path: envPath });

        await Loader.init();
        await Runner.run();
    } catch (error) {
        console.log(error);
    }
})();

