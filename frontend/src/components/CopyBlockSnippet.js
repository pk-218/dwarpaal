import React from 'react'
import { CopyBlock, sunburst } from "react-code-blocks"; // sunburst // monoBlue // paraisoLight

const CopyBlockSnippet = ({ code, language }) => {
    return (
        <div className='code-block'>
            <CopyBlock
                text={code}
                language={language}
                showLineNumbers={false}
                theme={sunburst}
                wrapLines={true}
                codeBlock
            />
        </div>
    )
}

export default CopyBlockSnippet