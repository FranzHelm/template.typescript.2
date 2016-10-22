import * as _ from "lodash";  
export class Utils {  
    public static kebapStyle(input: string): string {
        console.log(`kebapStyle(${input})`);
        return _.kebabCase(input);
    }
}
