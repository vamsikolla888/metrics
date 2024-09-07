import dynamicIconImports from "lucide-react/dynamicIconImports";
import PropTypes from "prop-types";
import { lazy, Suspense, useMemo } from "react";
import { ArrowBigDown } from "lucide-react";

  const CommonLucideIcon = ( {name, className}) => {
    const LucideIcon = useMemo(() => {
      return lazy(dynamicIconImports[name]);
    }, [name]);

      
    return (
      <>
          <Suspense fallback={<ArrowBigDown />}>
              <LucideIcon className={className}/>
          </Suspense>
      </>
    )
  }


CommonLucideIcon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string
};


  export default CommonLucideIcon;