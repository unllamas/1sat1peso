import { ProgressProps } from './types';
import { ProgressPrimitive, Value } from './style';

export function Progress(props: ProgressProps) {
  const { value } = props;

  return (
    <ProgressPrimitive>
      <Value $width={value} />
    </ProgressPrimitive>
  );
}
