-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN', 'AUDITOR');

-- AlterTable
ALTER TABLE "Questionnaire" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "registrationDate" TEXT,
ADD COLUMN     "role" "Role" DEFAULT 'USER',
ADD COLUMN     "submittedBy" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3);
