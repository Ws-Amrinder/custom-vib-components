import { Box, Button, ButtonProps } from "@mui/material";
import CircularIndeterminate from "./Spinner";
import { Tooltip } from "@mui/material";

interface IMuiButtonProps {
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
  loadingText?: string;
  primary?: boolean;
  label?: string;
  isPermission?: boolean;
  toolTipTitle?: React.ReactNode;
  isActiveBtn?: boolean;
}

const activeBtnStyles = {
  backgroundColor: "#6B77E1",
  color: "#fff",
  "&:hover": {
    backgroundColor: "rgb(74, 83, 157)",
  },
};
const primaryBtnStyles = {
  border: "1px solid rgba(107, 119, 225, 0.5)",
  color: "#6B77E1",
  "&:hover": {
    backgroundColor: "rgba(107, 119, 225, 0.04)",
  },
};

export const MuiButton: React.FC<IMuiButtonProps & ButtonProps> = (props) => {
  const {
    disabled: isDisabled,
    onClick,
    loading,
    loadingText,
    children,
    isPermission,
    toolTipTitle,
    isActiveBtn = true,
    ...rest
  } = props;

  if (isPermission) {
    return (
      <Tooltip title={toolTipTitle} placement="top" arrow>
        <span>
          <Button
            disabled={isDisabled}
            onClick={!props?.loading ? props?.onClick : undefined}
            sx={isActiveBtn ? activeBtnStyles : primaryBtnStyles}
            {...props}
          >
            {loading ? (
              <>
                {loadingText === "Rejecting" ? (
                  <CircularIndeterminate
                    className="rejectSpinnerButton"
                    size={16}
                    thickness={5}
                  />
                ) : (
                  <CircularIndeterminate
                    size={16}
                    thickness={5}
                    sx={{ color: "white" }}
                  />
                )}
                <Box ml={2}>{loadingText || "Submitting"}</Box>
              </>
            ) : (
              <>{children}</>
            )}
          </Button>
        </span>
      </Tooltip>
    );
  }

  return (
    <Button
      disabled={isDisabled}
      onClick={loading ? onClick : undefined}
      sx={isActiveBtn ? activeBtnStyles : primaryBtnStyles}
      {...rest}
    >
      {loading ? (
        <>
          {loadingText === "Rejecting" ? (
            <CircularIndeterminate
              className="rejectSpinnerButton"
              size={16}
              thickness={5}
            />
          ) : (
            <CircularIndeterminate
              size={16}
              sx={{ color: "white" }}
              thickness={5}
            />
          )}
          <Box ml={2}>{loadingText || "Submitting"}</Box>
        </>
      ) : (
        <>{children ?? "button"}</>
      )}
    </Button>
  );
};
