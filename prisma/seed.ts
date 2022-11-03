import prisma from "../src/config/db.js";

const admin = [{ email: "admin@admin.com", password: "1234" }];

async function main() {
  await prisma.users.createMany({ data: admin, skipDuplicates: true });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
