import React, {ComponentType, ReactElement} from 'react';

type Provider = ComponentType<{children: React.ReactNode}>;

interface Props {
  providers: Provider[];
}

/**
 * withProviders
 * Este HOC tiene la funcion de hacer automaticamente el wrap de n numero de
 * providers
 *
 */
function withProviders<P extends object>(
  Component: ComponentType<P>,
  providers: Provider[],
): ComponentType<P & Props> {
  return function WithProviders(props: P & Props): ReactElement {
    const wrappedComponent = <Component {...props} />;
    return providers.reduceRight((wrapped, Provider) => {
      return <Provider>{wrapped}</Provider>;
    }, wrappedComponent);
  };
}

export default withProviders;
