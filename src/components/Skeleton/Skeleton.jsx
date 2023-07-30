import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width="100%"
        height={275}
        viewBox="0 0 360 275"
        backgroundColor="var(--skeleton-bg)"
        foregroundColor="var(--skeleton-line)"
        {...props}
    >
        <rect x="0" y="1" rx="20" ry="20" width="100%" height="273" />
    </ContentLoader>
)

export default Skeleton;