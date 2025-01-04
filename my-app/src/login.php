use Illuminate\Support\Facades\File;

public function addToSqlFile()
{
    // Example data to be added
    $tableName = 'users';
    $data = [
        'first name' => 'John',
        'last name' => 'Doe',
        'email' => 'johndoe@example.com',
        'password' => bcrypt('password'),
    ];

    // Generate an SQL insert statement
    $sql = "INSERT INTO `$tableName` (`first name`, `last name`,`email`, `password`) VALUES ('{$data['first name']}', '{$data['last name']}', '{$data['email']}', '{$data['password']}');\n";

    // Path to the SQL file
    $filePath = storage_path('app/database-dump.sql');

    // Append the SQL statement to the file
    File::append($filePath, $sql);

    return response()->json(['message' => 'SQL statement added to the file.']);
}
