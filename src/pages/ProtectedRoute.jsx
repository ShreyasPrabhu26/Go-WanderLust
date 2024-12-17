import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import LoadingSpinner from "@/components/LoadingSpinner";

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <LoadingSpinner />
    }

    if (!user) {
        return <Navigate to="/" replace />
    }

    return children;
};

export default ProtectedRoute;
