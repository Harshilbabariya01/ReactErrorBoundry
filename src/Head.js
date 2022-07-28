import React, { useEffect, useState } from 'react';
import { ErrorBoundary, useErrorHandler } from 'react-error-boundary';

const Head = () => {

    const [india, setIndia] = useState('');
    const [japan, setJapan] = useState('');
    const [error, setError] = useState(false);
    const handleError = useErrorHandler();

    useEffect(() => {
        setIndia('Hello World');
    }, [japan]);
    useEffect(() => {
        setJapan('Hello World');
    }, [india]);

    const handleClick = () => {
        try {
            if (india === 'Hello Japan') {
                setIndia('Hello India');
                setError(false);
            } else {
                setError(true);
            }
        }
        catch (e) {
            handleError(e)
        }
    }

    return (
        <>
         {
            error ? <h1>Opps! Something went wrong...</h1> : (
                <>
            <div>
                <h1>{india}</h1>
            </div>
            <ErrorBoundary FallbackComponent={<h2>Could not update data.</h2>} >
                <div>
                    <button onClick={handleClick}>India</button>
                    <button onClick={() => { setIndia('Hello Japan') }}>Japan</button>
                </div>
            </ErrorBoundary>
                </>
            )
         }
        </>
    )
}

export default Head;