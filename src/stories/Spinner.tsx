import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

interface ISpinnerProps extends CircularProgressProps {
  className?: string;
  size?: string | number;
  thickness?: number;
}

const CircularIndeterminate: React.FC<ISpinnerProps> = (props) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress
        variant="indeterminate"
        sx={{ animationDuration: '0.5s !important' }}
        {...props}
      />
    </Box>
  );
};

export default CircularIndeterminate;