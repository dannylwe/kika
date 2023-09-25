-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "district" TEXT,
    "parish" TEXT,
    "village" TEXT,
    "identificationType" TEXT,
    "identificationId" TEXT,
    "dateOfBirth" TEXT,
    "highestEducationLevel" TEXT,
    "martialStatus" TEXT,
    "phoneNumber" TEXT,
    "isActive" BOOLEAN DEFAULT true,
    "hasBankAccount" BOOLEAN DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
