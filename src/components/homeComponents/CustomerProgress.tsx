import * as React from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';


export default function CustomerProgress() {
    const [progress, setProgress] = React.useState(40);
    return (
        <div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                <div className="bg-red-600 h-2.5 rounded-full dark:bg-gray-300 " style={{ width: progress + "%" }}></div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                <div className="bg-red-600 h-2.5 rounded-full bg-green-300 " style={{ width: progress - 5 + "%" }}></div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                <div className="bg-red-600 h-2.5 rounded-full bg-yellow-300 " style={{ width: progress - 10 + "%" }}></div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                <div className="bg-red-600 h-2.5 rounded-full bg-orange-300 " style={{ width: progress - 15 +  "%" }}></div>
            </div>
        </div>
    );
}