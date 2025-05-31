import {Review} from "@/types";

export default function Rating({reviews}: {reviews: Review[]}) {
  if (!reviews || reviews.length === 0) {
    return "";
  }

  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  const averageRating = totalRating / reviews.length;

  return (
    <div className="flex items-center mb-2">
      <span className="text-yellow-500">
        {"★".repeat(Math.round(averageRating))}
        {"☆".repeat(5 - Math.round(averageRating))}
      </span>
      <span className="text-sm text-gray-500 ml-2">
        ({reviews.length} recenzii)
      </span>
    </div>
  );
}
