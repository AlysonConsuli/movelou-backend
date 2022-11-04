-- CreateTable
CREATE TABLE "article" (
    "id" SERIAL NOT NULL,
    "featured" BOOLEAN NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "newsSite" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "publishedAt" TEXT NOT NULL,

    CONSTRAINT "article_pkey" PRIMARY KEY ("id")
);
