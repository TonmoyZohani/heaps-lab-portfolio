const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

function ensureFile(relativePath, content) {
  const fullPath = path.join(root, relativePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  if (!fs.existsSync(fullPath)) {
    fs.writeFileSync(fullPath, content, 'utf8');
  }
}

function ensurePage(relativePath, title) {
  const content = `import type { Metadata } from 'next';\n\nexport const metadata: Metadata = {\n  title: '${title}',\n};\n\nexport default function Page() {\n  return (\n    <div className="space-y-4">\n      <h1 className="text-2xl font-semibold">${title}</h1>\n      <p className="text-muted-foreground">This page has been scaffolded for the LMS route structure.</p>\n    </div>\n  );\n}\n`;
  ensureFile(relativePath, content);
}

function ensureLayout(relativePath, title) {
  const content = `import type { Metadata } from 'next';\nimport type { ReactNode } from 'react';\n\nexport const metadata: Metadata = {\n  title: '${title}',\n};\n\nexport default function Layout({ children }: { children: ReactNode }) {\n  return <section className="space-y-6">{children}</section>;\n}\n`;
  ensureFile(relativePath, content);
}

function ensureRoute(relativePath, name) {
  const content = `export async function GET() {\n  return Response.json({ ok: true, message: '${name}' });\n}\n\nexport async function POST() {\n  return Response.json({ ok: true, message: '${name}' });\n}\n`;
  ensureFile(relativePath, content);
}

const pageEntries = [
  ['src/app/(auth)/layout.tsx', 'Authentication', 'layout'],
  ['src/app/(auth)/auth/login/page.tsx', 'Login', 'page'],
  ['src/app/(auth)/auth/register/page.tsx', 'Register', 'page'],
  ['src/app/(auth)/auth/forgot-password/page.tsx', 'Forgot Password', 'page'],
  ['src/app/(auth)/auth/reset-password/[token]/page.tsx', 'Reset Password', 'page'],
  ['src/app/(student)/layout.tsx', 'Student Dashboard', 'layout'],
  ['src/app/(student)/dashboard/page.tsx', 'Student Dashboard', 'page'],
  ['src/app/(student)/courses/page.tsx', 'Course Catalog', 'page'],
  ['src/app/(student)/courses/[courseId]/page.tsx', 'Course Overview', 'page'],
  ['src/app/(student)/courses/[courseId]/modules/[moduleId]/chapters/[chapterId]/lessons/[lessonId]/page.tsx', 'Lesson Viewer', 'page'],
  ['src/app/(student)/courses/[courseId]/enroll/page.tsx', 'Enroll Course', 'page'],
  ['src/app/(student)/my-courses/page.tsx', 'My Courses', 'page'],
  ['src/app/(student)/quizzes/[quizId]/page.tsx', 'Quiz', 'page'],
  ['src/app/(student)/quizzes/[quizId]/results/page.tsx', 'Quiz Results', 'page'],
  ['src/app/(student)/payments/page.tsx', 'Payments', 'page'],
  ['src/app/(student)/payments/manual/[orderId]/page.tsx', 'Manual Payment', 'page'],
  ['src/app/(student)/devices/page.tsx', 'Devices', 'page'],
  ['src/app/(student)/profile/page.tsx', 'Profile', 'page'],
  ['src/app/(teacher)/layout.tsx', 'Teacher Workspace', 'layout'],
  ['src/app/(teacher)/teacher/dashboard/page.tsx', 'Teacher Dashboard', 'page'],
  ['src/app/(teacher)/teacher/courses/page.tsx', 'Teacher Courses', 'page'],
  ['src/app/(teacher)/teacher/courses/new/page.tsx', 'New Course', 'page'],
  ['src/app/(teacher)/teacher/courses/[courseId]/edit/page.tsx', 'Edit Course', 'page'],
  ['src/app/(teacher)/teacher/courses/[courseId]/modules/page.tsx', 'Course Modules', 'page'],
  ['src/app/(teacher)/teacher/courses/[courseId]/content-upload/page.tsx', 'Content Upload', 'page'],
  ['src/app/(teacher)/teacher/courses/[courseId]/question-bank/page.tsx', 'Question Bank', 'page'],
  ['src/app/(teacher)/teacher/quizzes/page.tsx', 'Teacher Quizzes', 'page'],
  ['src/app/(teacher)/teacher/quizzes/new/page.tsx', 'New Quiz', 'page'],
  ['src/app/(teacher)/teacher/quizzes/[quizId]/edit/page.tsx', 'Edit Quiz', 'page'],
  ['src/app/(teacher)/teacher/analytics/page.tsx', 'Teacher Analytics', 'page'],
  ['src/app/(admin)/layout.tsx', 'Admin Console', 'layout'],
  ['src/app/(admin)/admin/dashboard/page.tsx', 'Admin Dashboard', 'page'],
  ['src/app/(admin)/admin/students/page.tsx', 'Students', 'page'],
  ['src/app/(admin)/admin/students/[studentId]/page.tsx', 'Student Detail', 'page'],
  ['src/app/(admin)/admin/teachers/page.tsx', 'Teachers', 'page'],
  ['src/app/(admin)/admin/teachers/[teacherId]/page.tsx', 'Teacher Detail', 'page'],
  ['src/app/(admin)/admin/courses/page.tsx', 'Course Review Queue', 'page'],
  ['src/app/(admin)/admin/courses/[courseId]/review/page.tsx', 'Course Review', 'page'],
  ['src/app/(admin)/admin/payments/pending/page.tsx', 'Pending Payments', 'page'],
  ['src/app/(admin)/admin/payments/[paymentId]/page.tsx', 'Payment Detail', 'page'],
  ['src/app/(admin)/admin/payments/ledger/page.tsx', 'Payment Ledger', 'page'],
  ['src/app/(admin)/admin/coupons/page.tsx', 'Coupons', 'page'],
  ['src/app/(admin)/admin/coupons/new/page.tsx', 'New Coupon', 'page'],
  ['src/app/(admin)/admin/support-tickets/page.tsx', 'Support Tickets', 'page'],
  ['src/app/(admin)/admin/support-tickets/[ticketId]/page.tsx', 'Support Ticket', 'page'],
  ['src/app/(admin)/admin/devices/page.tsx', 'Device Monitoring', 'page'],
  ['src/app/(admin)/admin/super-admin/revenue-analytics/page.tsx', 'Revenue Analytics', 'page'],
  ['src/app/(admin)/admin/super-admin/system-config/page.tsx', 'System Config', 'page'],
  ['src/app/(admin)/admin/super-admin/audit-logs/page.tsx', 'Audit Logs', 'page'],
  ['src/app/(admin)/admin/super-admin/admins/page.tsx', 'Admin Management', 'page'],
  ['src/app/(admin)/admin/super-admin/backups/page.tsx', 'Backups', 'page'],
  ['src/app/(admin)/admin/settings/page.tsx', 'Admin Settings', 'page'],
  ['src/app/api/auth/[...nextauth]/route.ts', 'Auth API', 'route'],
  ['src/app/api/proxy/[...path]/route.ts', 'Proxy API', 'route'],
  ['src/app/api/upload/route.ts', 'Upload API', 'route'],
  ['src/app/api/webhooks/payment-notify/route.ts', 'Payment Webhook', 'route'],
  ['src/app/unauthorized/page.tsx', 'Unauthorized', 'page'],
  ['src/app/not-found.tsx', 'Not Found', 'page'],
  ['src/app/error.tsx', 'Error', 'page'],
];

for (const [relativePath, title, kind] of pageEntries) {
  if (kind === 'layout') {
    ensureLayout(relativePath, title);
  } else if (kind === 'route') {
    ensureRoute(relativePath, title);
  } else {
    ensurePage(relativePath, title);
  }
}

const componentFiles = {
  'src/components/shared/Navbar.tsx': `export function Navbar() {\n  return <nav className="rounded-lg border bg-background p-4">LMS Navigation</nav>;\n}\n`,
  'src/components/shared/Sidebar.tsx': `export function Sidebar() {\n  return <aside className="rounded-lg border bg-background p-4">LMS Sidebar</aside>;\n}\n`,
  'src/components/shared/DataTable.tsx': `type DataTableProps = { title: string; children?: React.ReactNode };\n\nexport function DataTable({ title, children }: DataTableProps) {\n  return <section className="rounded-lg border bg-background p-4">{title}{children}</section>;\n}\n`,
  'src/components/shared/Pagination.tsx': `export function Pagination() {\n  return <div className="flex gap-2">Previous 1 2 3 Next</div>;\n}\n`,
  'src/components/shared/ConfirmDialog.tsx': `export function ConfirmDialog() {\n  return <div className="rounded-lg border p-4">Confirm action</div>;\n}\n`,
  'src/components/course/CourseCard.tsx': `export function CourseCard() {\n  return <div className="rounded-lg border p-4">Course card</div>;\n}\n`,
  'src/components/course/ModuleAccordion.tsx': `export function ModuleAccordion() {\n  return <div className="rounded-lg border p-4">Module accordion</div>;\n}\n`,
  'src/components/course/LessonPlayer.tsx': `export function LessonPlayer() {\n  return <div className="rounded-lg border p-4">Lesson player</div>;\n}\n`,
  'src/components/course/PDFViewer.tsx': `export function PDFViewer() {\n  return <div className="rounded-lg border p-4">PDF viewer</div>;\n}\n`,
  'src/components/quiz/QuizTimer.tsx': `export function QuizTimer() {\n  return <div className="rounded-lg border p-4">Quiz timer</div>;\n}\n`,
  'src/components/quiz/QuestionCard.tsx': `export function QuestionCard() {\n  return <div className="rounded-lg border p-4">Question card</div>;\n}\n`,
  'src/components/quiz/QuizResultChart.tsx': `export function QuizResultChart() {\n  return <div className="rounded-lg border p-4">Quiz result chart</div>;\n}\n`,
  'src/components/quiz/QuestionBankEditor.tsx': `export function QuestionBankEditor() {\n  return <div className="rounded-lg border p-4">Question bank editor</div>;\n}\n`,
  'src/components/payment/ManualPaymentForm.tsx': `export function ManualPaymentForm() {\n  return <div className="rounded-lg border p-4">Manual payment form</div>;\n}\n`,
  'src/components/payment/PaymentStatusBadge.tsx': `export function PaymentStatusBadge() {\n  return <div className="rounded-lg border p-4">Payment status</div>;\n}\n`,
  'src/components/payment/VerificationQueueTable.tsx': `export function VerificationQueueTable() {\n  return <div className="rounded-lg border p-4">Verification queue table</div>;\n}\n`,
  'src/components/device/DeviceCard.tsx': `export function DeviceCard() {\n  return <div className="rounded-lg border p-4">Device card</div>;\n}\n`,
  'src/components/device/SessionInvalidateModal.tsx': `export function SessionInvalidateModal() {\n  return <div className="rounded-lg border p-4">Session invalidation modal</div>;\n}\n`,
  'src/components/charts/RevenueChart.tsx': `export function RevenueChart() {\n  return <div className="rounded-lg border p-4">Revenue chart</div>;\n}\n`,
  'src/components/charts/StudentPerformanceChart.tsx': `export function StudentPerformanceChart() {\n  return <div className="rounded-lg border p-4">Student performance chart</div>;\n}\n`,
};

for (const [relativePath, content] of Object.entries(componentFiles)) {
  ensureFile(relativePath, content);
}

const libFiles = {
  'src/lib/api-client.ts': `export const apiClient = {\n  get: async (url) => {\n    const response = await fetch(url);\n    return response.json();\n  },\n};\n`,
  'src/lib/auth.ts': `export function getAuthSession() {\n  return { user: null };\n}\n`,
  'src/lib/rbac.ts': `export function canAccess(_role, _permission) {\n  return true;\n}\n`,
  'src/lib/device-fingerprint.ts': `export function createDeviceFingerprint() {\n  return 'device-fingerprint';\n}\n`,
  'src/lib/hls-player-config.ts': `export const hlsPlayerConfig = {};\n`,
  'src/lib/validators/course.schema.ts': `export const courseSchema = {};\n`,
  'src/lib/validators/quiz.schema.ts': `export const quizSchema = {};\n`,
  'src/lib/validators/payment.schema.ts': `export const paymentSchema = {};\n`,
  'src/lib/validators/auth.schema.ts': `export const authSchema = {};\n`,
  'src/lib/utils.ts': `export function cn(...classes) {\n  return classes.filter(Boolean).join(' ');\n}\n`,
};

for (const [relativePath, content] of Object.entries(libFiles)) {
  ensureFile(relativePath, content);
}

const hookFiles = {
  'src/hooks/useAuth.ts': `export function useAuth() {\n  return { user: null, loading: false };\n}\n`,
  'src/hooks/useRole.ts': `export function useRole() {\n  return { role: 'student' };\n}\n`,
  'src/hooks/useDeviceSession.ts': `export function useDeviceSession() {\n  return { deviceId: null };\n}\n`,
  'src/hooks/useQuizTimer.ts': `export function useQuizTimer() {\n  return { timeLeft: 0 };\n}\n`,
  'src/hooks/usePagination.ts': `export function usePagination() {\n  return { currentPage: 1, totalPages: 1 };\n}\n`,
};

for (const [relativePath, content] of Object.entries(hookFiles)) {
  ensureFile(relativePath, content);
}

const storeFiles = {
  'src/store/authStore.ts': `export const authStore = { user: null };\n`,
  'src/store/courseStore.ts': `export const courseStore = { courses: [] };\n`,
  'src/store/quizStore.ts': `export const quizStore = { quizzes: [] };\n`,
};

for (const [relativePath, content] of Object.entries(storeFiles)) {
  ensureFile(relativePath, content);
}

const typeFiles = {
  'src/types/user.types.ts': `export interface User { id: string; name: string; email: string; role: 'student' | 'teacher' | 'admin'; }\n`,
  'src/types/course.types.ts': `export interface Course { id: string; title: string; description?: string; }\n`,
  'src/types/quiz.types.ts': `export interface Quiz { id: string; title: string; }\n`,
  'src/types/payment.types.ts': `export interface Payment { id: string; amount: number; status: string; }\n`,
  'src/types/device.types.ts': `export interface DeviceSession { id: string; deviceName: string; }\n`,
};

for (const [relativePath, content] of Object.entries(typeFiles)) {
  ensureFile(relativePath, content);
}

const configFiles = {
  'src/config/env.ts': `export const env = { apiBaseUrl: process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:5000' };\n`,
  'src/config/constants.ts': `export const roles = { student: 'student', teacher: 'teacher', admin: 'admin' } as const;\nexport const sessionLimits = { maxDevices: 5 };\n`,
  'src/config/site.ts': `export const siteConfig = { name: 'LMS', description: 'Learning management system' };\n`,
  'src/middleware.ts': `import { NextResponse } from 'next/server';\nimport type { NextRequest } from 'next/server';\n\nexport function middleware(request: NextRequest) {\n  return NextResponse.next();\n}\n`,
};

for (const [relativePath, content] of Object.entries(configFiles)) {
  ensureFile(relativePath, content);
}

for (const folder of ['public/icons', 'public/images']) {
  fs.mkdirSync(path.join(root, folder), { recursive: true });
}

console.log('LMS structure scaffolded.');
